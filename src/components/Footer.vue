<script lang="ts">
export default {
  components: {},
  setup() {},
};
</script>
<template>
  <div class="footer-component">
    <div class="main-container">
      <p>
        <a target="_blank" href="https://support.microsoft.com/contactus"
          >Contact Us</a
        >
        |
        <a target="_blank" href="https://go.microsoft.com/fwlink/?LinkId=521839"
          >Privacy & Cookies</a
        >
        |
        <a
          target="_blank"
          href="https://go.microsoft.com/fwlink/?linkid=2259814"
          >Consumer Health Privacy</a
        >
        |
        <a target="_blank" href="https://go.microsoft.com/fwlink/?LinklD=206977"
          >Terms of Use</a
        >
        |
        <a target="_blank" href="https://www.microsoft.com/trademarks"
          >Trademarks</a
        >
        |
        <a>© 2024 Microsoft</a>
      </p>
      <p>
        <span></span>
        <span style="">
          <a
            target="_blank"
            href="https://www.microsoft.com/"
            aria-label="microsoft"
          ></a
        ></span>
        <!-- <span>update</span> -->
      </p>
    </div>
  </div>
</template>

<style scoped  lang="scss">
.footer-component {
  position: relative;
  // height: 40px;
  background: #f6f6f6;
  width: 100%;
  overflow: hidden;
  & > div {
    padding: 10px 30px;
    box-sizing: border-box;
    text-align: center;
    width: 100%;
    color: #000;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    p {
      align-content: center;
    }
    a {
      cursor: pointer;
      color: #000;
      margin: 0 5px;
      text-decoration: none;
      line-height: 20px;
      display: inline-block;
    }
    p:nth-child(2) {
      span {
        vertical-align: middle;
        display: inline-block;
        height: 20px;
        line-height: 20px;
      }
      span:nth-child(2) {
        width: 100px;
        background: url(@/assets/images/microsoft.png) no-repeat center;
        background-size: 70px auto;
        margin: 0 5px;
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 840px) {
  .footer-component {
    & > div {
      // width: 120%;
      // position: relative;
      // left: -10%;
      // height: 30px;
      box-shadow: inset 0px 4px 6px rgba(0, 0, 0, 0.05);
      padding: 3px 5px;
      & > p {
        transform: scale(0.9);
      }
      justify-content: center;
      & > p:nth-child(2) {
        display: none;
      }
    }
  }
}
</style>
