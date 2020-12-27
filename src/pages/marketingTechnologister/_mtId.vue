<template lang="pug">
div
  h2.col-auto {{ dummyTitle }}
  div.cardContainer
    div.col-auto
      div
        introduceCard.m-1(
          :title="dummyTitle"
          :text="dummyText"
          :imagePath="dummyImg"
          :link="dummyLink"
          )
</template>

<script>
import introduceCard from "~/components/parts/introduceCard.vue";

export default {
  components: {
    introduceCard,
  },
  data() {
    return {
      items: [],
      dummyTitle: "wmapkj",
      dummyText: "hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge",      
      dummyImg: "https://www.wmapst.net/wp-content/uploads/2015/06/1009038_367626903367342_1094204069_o.jpg",
      dummyLink: "https://www.wmapst.net/",
      noimage: "https://www.wmapst.net/wp-content/themes/cocoon-master/images/no-image-320.png",
      externalLink: true,
    };
  },    
}
</script>

<style lang="stylus" scoped>
.cardContainer
  display flex
  flex-wrap wrap

.introduceCard 
  margin: 10px

</style>
