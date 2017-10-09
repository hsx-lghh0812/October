<template>
  <div class="content">
    <div class="preview-basic">
      <div id="preview-swiper" class="swiper-container">
        <div class="swiper-wrapper"></div>
        <div id="preview-pagination" class="swiper-pagination"></div>
      </div>
      <div class="basic-info">
        <div>
          <div id="preferentialPrice" class="fl">优惠价：￥{{msg}}</div>
          <div id="retailPrice" class="fl">零售价：￥{{}}</div>
          <div id="salesVolume" class="fr">已售：￥{{}}</div>
          <div class="clearfix"></div>
        </div>
        <div id="goodsName">{{}}</div>
        <div class="right-icon-detail">
          <div>
            <span class="right-icon"></span><span><span>正品保证</span> </span>
          </div>
          <div>
            <span class="right-icon"></span><span>7天退货</span>
          </div>
          <div>
            <span class="right-icon"></span><span>快速发货</span>
          </div>
          <div>
            <span class="right-icon"></span><span>假一赔十</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 推荐 -->
    <div class="recommend pd-normal d-none">
      <div class="re-header">推荐搭配</div>
      <div class="re-body">
        <div id="recommend-swiper" class="swiper-container">
          <div class="swiper-wrapper"></div>
        </div>
      </div>
    </div>
    <!-- 评论 -->
    <div class="comment pd-normal d-none">
      <div class="co-header">
        <div class="fl">评论</div>
        <div class="fr position-rel" style="margin-right: 10px;"
             onclick="comment.more(this)">
          查看更多 <span class="pure-rarrow"></span>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="co-body">
        <!-- <div class="comment-unit"></div> -->
      </div>
    </div>
    <!-- 详情 -->
    <div class="goodsDetails pd-normal"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your product'
      }
    },
    method: {},
    mounted: function () {
      console.log('mounted>>>>>>>>>>>>>>')
    }
  }
</script>
<!--css只供当前组件使用-->
<style scoped>
  @import "../css/product.css";
</style>

