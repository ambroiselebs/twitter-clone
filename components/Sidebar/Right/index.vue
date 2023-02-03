<template>
  <div class="flex flex-col">
    <!-- Preview card : What's happening -->
    <SidebarRightPreviewCard title="What's happening">

      <SidebarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems" v-bind:key="whatsHappening">
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ whatsHappening.title }}</h2>

          <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>

    </SidebarRightPreviewCard>

    <!-- Preview card: Who to follow -->
    <SidebarRightPreviewCard title="Who to follow" >

      <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems" v-bind:key="whoToFollow">
        <div class="flex flex-row justify-between items-center p-2">
          <div class="flex flex-row">
            <img class="w-10 h-10 rounded-full" :src="whoToFollow.image" :alt="'Profile picture of '+whoToFollow.name">

            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ whoToFollow.name }}</h1>
              <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
            </div>

          </div>
          <div class="flex h-full">
            <button class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full">Follow</button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>

    </SidebarRightPreviewCard>

  </div>  
</template>
<script setup>
const whatsHappeningItems = ref([
  {
    title: 'SpaceX',
    count: '18.8k Tweets'
  },
  {
    title: 'ambroiselebs',
    count: '24.4k Tweets'
  },
  {
    title: '#twitterClone',
    count: '154.6k Tweets'
  }
])

const whoToFollowItems = ref([
  {
    name: 'ambroiselebs',
    handle: '@ambroiselebs',
    image: 'https://pbs.twimg.com/profile_images/1528651993170026496/Q0e_7i9l_400x400.jpg'
  },
  {
    name: 'Elon Musk',
    handle: '@elonmusk',
    image: 'https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg'
  },
  {
    name: 'Zizou ☃️',
    handle: '@zizoublc_',
    image: 'https://pbs.twimg.com/profile_images/1551535209002274817/3j4wr1D5_400x400.jpg'
  },
  {
    name: 'Florent • Volax',
    handle: '@VolaxOff',
    image: 'https://pbs.twimg.com/profile_images/1207059578015428613/S3JWtk57_400x400.jpg'
  }
])
</script>