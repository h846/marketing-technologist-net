<template lang="pug">
div
  h2.col-auto Marketing Technologisters
  div.cardContainer
    div.col-auto
      div
        topCard.m-1(
          :title="dummyTitle"
          :text="dummyText"
          :imagePath="dummyImg"
          :link="dummyLink"
          )
  h2.col-auto Web Marketing and Programming Blog 
  div.cardContainer
    div.col-auto(v-for="item in items")
      div(v-if="item._embedded['wp:featuredmedia']")
        topCard.m-1(
          :title="item.title.rendered"
          :text="item.excerpt.rendered"
          :imagePath="item._embedded['wp:featuredmedia'][0].source_url"
          :link="item.link"
          :externalLink="externalLink"
        )
      div(v-else)
        topCard.m-1(
          :title="item.title.rendered"
          :text="item.excerpt.rendered"
          :imagePath="noimage"
          :link="item.link"
          :externalLink="externalLink"
        )
</template>

<script>
import topCard from "~/components/parts/Card.vue";

export default {
  components: {
    topCard,
  },
  data() {
    return {
      items: [],
      dummyTitle: "wmapkj",
      dummyText: "hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge",      
      dummyImg: "https://www.wmapst.net/wp-content/uploads/2015/06/1009038_367626903367342_1094204069_o.jpg",
      dummyLink: "/marketingTechnologister/hoge hoge/",
      noimage: "https://www.wmapst.net/wp-content/themes/cocoon-master/images/no-image-320.png",
      externalLink: true,
    };
  },
  async asyncData({ $axios }) {
    return await $axios
      .get("/posts?_embed", {
        params: {
          page: 1,
          per_page: 10,
        },
      })
      .then((response) => {
        return {
          items: response.data,
        };
      });
  },
};
</script>

<style lang="stylus" scoped>
.cardContainer
  display flex
  flex-wrap wrap

</style>