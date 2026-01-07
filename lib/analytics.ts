/* eslint-disable @typescript-eslint/no-explicit-any */

const PROJECT_PREFIX = ''

export enum EVENTS {

 NAV_LOGO_CLICKED = 'NAV_LOGO_CLICKED',
  NAV_MENU_TOGGLE_OPEN = 'NAV_MENU_TOGGLE_OPEN',
  NAV_MENU_TOGGLE_CLOSE = 'NAV_MENU_TOGGLE_CLOSE',
  NAV_LINK_CLICKED = 'NAV_LINK_CLICKED',
HOME_HIRE_ME_CLICKED = 'HOME_HIRE_ME_CLICKED',
ABOUT_US_HIRE_ME_CLICKED = 'ABOUT_US_HIRE_ME_CLICKED',
  DOWNLOAD_CV_CLICKED = 'DOWNLOAD_CV_CLICKED',


  CONTACT_FORM_BUTTON = 'CONTACT_FORM_BUTTON',
  CONTACT_FORM_SUCCESS = 'CONTACT_FORM_SUCCESS',
  CONTACT_FORM_ERROR = 'CONTACT_FORM_ERROR',
  PROJECT_LINK_CLICKED = 'PROJECT_LINK_CLICKED',
  FOOTER_SOCIAL_LINK_CLICKED = 'FOOTER_SOCIAL_LINK_CLICKED',


}

type EventsMapType = { [key in EVENTS]?: any }

/**
 * GTM Custom Events
 */
const GTM_EVENTS: EventsMapType = {
    [EVENTS.NAV_LOGO_CLICKED]: 'NAV_LOGO_CLICKED',
    [EVENTS.NAV_MENU_TOGGLE_OPEN]: 'NAV_MENU_TOGGLE_OPEN',
    [EVENTS.NAV_MENU_TOGGLE_CLOSE]: 'NAV_MENU_TOGGLE_CLOSE',
    [EVENTS.NAV_LINK_CLICKED]: 'NAV_LINK_CLICKED',
    [EVENTS.HOME_HIRE_ME_CLICKED]: 'HOME_HIRE_ME_CLICKED',
    [EVENTS.ABOUT_US_HIRE_ME_CLICKED]: 'ABOUT_US_HIRE_ME_CLICKED',
    [EVENTS.CONTACT_FORM_BUTTON]: 'CONTACT_FORM_BUTTON',
    [EVENTS.CONTACT_FORM_SUCCESS]: 'CONTACT_FORM_SUCCESS',
    [EVENTS.CONTACT_FORM_ERROR]: 'CONTACT_FORM_ERROR',
    [EVENTS.PROJECT_LINK_CLICKED]: 'PROJECT_LINK_CLICKED',
    [EVENTS.FOOTER_SOCIAL_LINK_CLICKED]: 'FOOTER_SOCIAL_LINK_CLICKED',
    [EVENTS.DOWNLOAD_CV_CLICKED]: 'DOWNLOAD_CV_CLICKED',

}

/**
 * ========== CORE TRACKERS ==========
 */

function pushToDataLayer(event: string, data?: any) {
  if (process.client && (window as any).dataLayer) {
    ;(window as any).dataLayer.push({
      event,
      ...data
    })
  }
}

function trackFbPixelEvent(event: string) {
  if (process.client && (window as any).fbq) {
    ;(window as any).fbq('track', event)
  }
}

function trackFloodLightEvent(event: string, data?: any) {
  if (process.client && (window as any).gtag) {
    ;(window as any).gtag('event', 'conversion', {
      send_to: event,
      ...(data || {})
    })
  }
}

function trackUniversalPixelEvent(event: string) {
  if (!process.client) return

  try {
    const pixelUrl = `https://insight.adsrvr.org/track/pxl/?adv=zuazor5&ct=${event}&fmt=3`
    const img = new Image(1, 1)
    img.src = pixelUrl
    img.style.display = 'none'
    document.body.appendChild(img)
  } catch (err) {
    console.error('Universal Pixel Error', err)
  }
}

/**
 * ========== MAIN TRACK FUNCTION ==========
 */

export function trackEvent(
  event: EVENTS,
  additionalInfo?: {
    common?: any
    gtm?: any
    fbPixel?: any
    floodlight?: any
    universal?: any
  }
) {
  const gtmEvent = GTM_EVENTS[event]

  if (gtmEvent) {
    pushToDataLayer(PROJECT_PREFIX + gtmEvent, {
      ...additionalInfo?.common,
      ...additionalInfo?.gtm
    })
  }

  if (additionalInfo?.fbPixel) {
    trackFbPixelEvent(additionalInfo.fbPixel)
  }

  if (additionalInfo?.floodlight) {
    trackFloodLightEvent(additionalInfo.floodlight)
  }

  if (additionalInfo?.universal) {
    trackUniversalPixelEvent(additionalInfo.universal)
  }
}
