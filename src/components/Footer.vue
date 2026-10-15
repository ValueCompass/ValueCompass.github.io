<script lang="ts">
export default {
  components: {},
  setup() {},
};
</script>
<template>
  <div class="footer-component">
    <div class="main-container">
      <nav class="footer-links" aria-label="Footer links">
        <div>
          <a target="_blank" href="https://support.microsoft.com/contactus"
            >Contact Us</a
          >
        </div>
        <div>
          <a
            target="_blank"
            href="https://go.microsoft.com/fwlink/?LinkId=521839"
            >Privacy & Cookies</a
          >
        </div>
        <div>
          <a
            target="_blank"
            href="https://go.microsoft.com/fwlink/?linkid=2259814"
            >Consumer Health Privacy</a
          >
        </div>
        <div>
          <a
            target="_blank"
            href="https://go.microsoft.com/fwlink/?LinklD=206977"
            >Terms of Use</a
          >
        </div>
        <div>
          <a target="_blank" href="https://www.microsoft.com/trademarks"
            >Trademarks</a
          >
        </div>
        <div><span>© 2024 Microsoft</span></div>
      </nav>
      <p class="microsoft-brand">
        <a
          target="_blank"
          href="https://www.microsoft.com/"
          aria-label="Microsoft"
        >
          <img src="@/assets/images/microsoft.png" alt="" />
        </a>
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
    .footer-links {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      & > div {
        display: flex;
        align-items: center;
        line-height: 20px;
        &:not(:last-child)::after {
          content: "";
          width: 1px;
          height: 12px;
          background: currentColor;
        }
        & > span {
          margin: 0 12px;
        }
      }
      a {
        margin: 0 12px;
      }
    }
    a {
      cursor: pointer;
      color: #000;
      margin: 0 5px;
      text-decoration: none;
      line-height: 20px;
      display: inline-block;
    }
    .microsoft-brand {
      flex: 0 0 100px;
      margin-left: auto;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 20px;
      }
      img {
        display: block;
        width: 70px;
        height: auto;
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
      padding: 8px 5px;
      & > .footer-links {
        flex: 0 0 100%;
      }
      justify-content: center;
      & > .microsoft-brand {
        display: flex;
        flex: 0 0 100%;
        margin-left: 0;
        margin-top: 6px;
      }
    }
  }
}
</style>
