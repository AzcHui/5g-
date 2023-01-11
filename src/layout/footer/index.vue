<template>
  <div class="foort">
    <div class="foort_record">
      <div class="foort_recordArea">
        <div class="foort_recordUl">
          <div class="foort_recordli">
            <div>网路警察举报平台</div>
          </div>
          <div class="foort_recordli">
            <div>公共信息网路安全监察</div>
          </div>
          <div class="foort_recordli">
            <div>网上交易保障中心</div>
          </div>
          <div class="foort_recordli">
            <div>网站信用良好 Credit Rating</div>
          </div>
          <div class="foort_recordli">
            <div>可信网站身份验证</div>
          </div>
        </div>
        <div class="copyright">
          <div class="copyrightOne">Copyright© 5G发展 Reserved V.4.16</div>
          <div class="copyrightTwo">建议使用分辨率：1280以上</div>
          <div class="copyrightShree">
            建议使用浏览器为:
            <div>
              <img src="@/assets/PC/huohu.svg" alt="" />
            </div>
            <div>
              <img src="@/assets/PC/360.svg" alt="" />
            </div>
            <div>
              <img src="@/assets/PC/guge.svg" alt="" />
            </div>
            <div>
              <img src="@/assets/PC/souhu.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.foort {
  background: #abcff6;

  // 备案
  .foort_record {
    box-sizing: border-box;
    margin-top: 0 !important;
    overflow: hidden;
    padding: 16px 0 27px;
    background: #d4d4d4;
    font-size: 12px;
    color: #64656a;
    .foort_recordArea {
      width: 880px;
      margin: 0 auto;
      .foort_recordUl {
        display: flex;
        width: 710px;
        margin: 46px auto 30px;
        text-align: center;
        .foort_recordli {
          box-sizing: border-box;
          display: inline-block;
          margin: 0 12px;
          width: 120px;
          height: 45px;
          text-indent: -9999px;
          background-image: url("@/assets/PC/beian.png");
          background-position-x: left;
          &:nth-child(1) {
            background-position-y: 0;
          }
          &:nth-child(2) {
            background-position-y: -47px;
          }
          &:nth-child(3) {
            background-position-y: -94px;
          }
          &:nth-child(4) {
            background-position-y: -141px;
          }
          &:nth-child(5) {
            background-position-y: -188px;
          }
        }
      }
      .copyright {
        text-align: center;
        box-sizing: border-box;
        .copyrightOne {
          margin-bottom: 3px;
        }
        .copyrightTwo {
          margin-bottom: 3px;
        }
        .copyrightShree {
          box-sizing: border-box;
          margin-bottom: 3px;
          div {
            display: inline-block;
            box-sizing: border-box;
            width: 30px;
            height: 30px;
            margin-left: 3px;
            vertical-align: middle;
            img {
              width: 24px;
              height: 24px;
            }
          }
        }
      }
    }
  }
}
</style>
