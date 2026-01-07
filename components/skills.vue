<template>
    <section class="services bg-white py-8 p-1">
      <div class="services-text mb-8">
        <p class="text-2xl font-bold text-gray-700 font-cursive">Skills</p>
        <p class="text-lg font-bold text-gray-700 font-cursive">Skills required</p>
        <p class="text-gray-500 font-cursive">
          Skills are the expertise or talent needed in order to do a job or task. Life skills help you through everyday
          tasks. Skills help you succeed in all aspects of your life and with organizations.
        </p>
      </div>
  
      <!-- Boxes -->
      <div class="box-container flex flex-wrap gap-4 justify-center">
        <div
          class="box shadow-md flex flex-col justify-center items-center p-4 w-72 h-80 setBackground"
          :style="setBackground('services-1')"
        >
          <span class="w-10 h-10 bg-black rounded-full flex justify-center items-center text-white font-bold font-cursive">1</span>
          <p class="text-white text-xl font-cursive font-bold mt-4">Active Skills</p>
          <p class="text-white text-center text-sm font-cursive">
            Good Communication <br />
            Positive Attitude <br />
            Passionate Work <br />
            Self Motivated <br />
            Honest
          </p>
        </div>
  
        <div
          class="box shadow-md flex flex-col justify-center items-center p-4 w-72 h-80"
          :style="setBackground('services-2')"
        >
          <span class="w-10 h-10 bg-black rounded-full flex justify-center items-center text-white font-bold font-cursive">2</span>
          <p class="text-white text-xl font-cursive font-bold mt-4">Script Skills</p>
          <p class="text-white text-center text-sm font-cursive">
            JavaScript <br />
            React.JS <br />
            Vue.JS <br />
            Node.JS <br />
            MySql <br />
            MongoDB <br />
            HTML 5 <br />
            CSS/scss  <br />
            Bootstrap  <br />
            Git
          </p>
        </div>
  
        <div
          class="box shadow-md flex flex-col justify-center items-center p-4 w-72 h-80"
          :style="setBackground('services-3')"
        >
          <span class="w-10 h-10 bg-black rounded-full flex justify-center items-center text-white font-bold font-cursive">3</span>
          <p class="text-white text-xl font-cursive font-bold mt-4">Code Skills</p>
          <p class="text-white text-center text-sm font-cursive">
            JavaScript  <br />
            C++ <br />
            C
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
    import service1 from '@/assets/images/services-1.png'
import service2 from '@/assets/images/services-2.png'
import service3 from '@/assets/images/services-3.png'

  export default {
    methods: {
      setBackground(imageName) {
        return {

          backgroundImage: `url(${imageName === 'services-1' ? service1 : imageName === 'services-2' ? service2 : service3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgba(96, 165, 250, 0.3)',
    backgroundBlendMode: 'overlay',
      
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .services {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .box {
    border-radius: 8px;
  }
  </style>
  