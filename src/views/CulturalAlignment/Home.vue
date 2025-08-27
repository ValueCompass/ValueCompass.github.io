<template>
  <div style="position: relative">
    <div class="culture-alignment-container main-container">
      <div class="left">
        <h1>As Culture Shifts, So Does AI</h1>
        <p>
          In a globally connected world, AI must navigate the nuances of diverse
          cultural values. Cultural alignment empowers language models to adapt
          their responses with sensitivity and relevance, fostering more
          meaningful and respectful human-AI interactions.
        </p>

        <span @click="toTest" class="button github-btn" style="font-size: 1.5em"
          >Get Started <i class="icon"></i
        ></span>
      </div>
      <div class="right" style="position: ">
        <div class="right-content">
          <img
            class="bg"
            src="@/assets//images/culturalBg.png"
            alt=""
            style="z-index: -1"
          />
        </div>
        <div class="country-list">
          <div class="country-item country1">
            <span class="dot"></span>
            <span class="country-name">China</span>
          </div>
          <div class="country-item country2">
            <span class="dot"></span>
            <span class="country-name">South Korea</span>
          </div>

          <div class="country-item country3">
            <span class="dot"></span>
            <span class="country-name">japan</span>
          </div>
          <div class="country-item country4">
            <span class="dot"></span>
            <span class="country-name">Thailand</span>
          </div>
          <div class="country-item country5">
            <span class="dot"></span>
            <span class="country-name">malaysia</span>
          </div>
          <div class="country-item country6">
            <span class="dot"></span>
            <span class="country-name">Singapore</span>
          </div>
          <div class="country-item country7">
            <span class="dot"></span>
            <span class="country-name">indonesia</span>
          </div>
          <div class="country-item country8">
            <span class="dot"></span>
            <span class="country-name">Australia</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>

<style scoped lang="scss">
.github-btn {
  display: inline-block;
  position: relative;
  // display: flex;
  // flex-direction: row;
  // align-items: center;
  // line-height: ;
  .icon {
    margin-left: 0.5em;
    width: 1em;
    height: 1em;
    background: url(@/assets/images/arrow-right.png) no-repeat left center;
    background-size: 60% auto;
    display: inline-block;
    transform: translate(0, 0.1em);
    transition: all 0.2s;
  }
  &:hover {
    & > .icon {
      transform: translate(0.2em, 0.1em);
    }
  }
}

.culture-alignment-container {
  padding: 2em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    width: 49%;
    text-align: left;
    h1 {
      font-size: 4em;
      font-weight: 400;
      line-height: 1.3;
      color: rgba(0, 79, 143, 1);
      font-style: italic;
    }
    p {
      font-size: 1.25em;
      line-height: 1.8;
      margin: 1em 0 2.4em;
    }
    button {
      background: var(--theme-color);
      padding: 0 1.14em;
      height: 2.28em;
      color: #fff;
      font-size: 1.25em;
      font-weight: bold;
      cursor: pointer;
      margin-top: 3.43em;
      margin-bottom: 2em;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  .right {
    position: relative;
    width: 49%;
    .right-content {
      padding-top: 100%;
      background: rgba(0, 0, 0, 0.2);
      position: relative;
      .bg {
        position: absolute;
        width: 414.286%;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .country-list {
      .country-item {
        span {
          position: absolute;
          position: absolute;
          left: 0;
          top: 0;
        }
        span.dot {
          position: absolute;
          width: 2.3%;
          height: 2.3%;
          border-radius: 50%;
          background: red;
          display: inline-block;
        }
        span.country-name {
          font-size: 1.125em;
          font-weight: bold;
          transform: translateX(1.3em);
          text-transform: uppercase;
        }
      }

      .country1 {
        span.dot {
          background: rgba(128, 0, 0, 1);
          left: 8.8%;
          top: 14.2%;
        }
        span.country-name {
          color: rgba(128, 0, 0, 1);
          left: 8.8%;
          top: 14.2%;
        }
      }

      .country2 {
        span.dot {
          background: rgba(153, 92, 78, 1);
          left: 52.7%;
          top: 11%;
        }
        span.country-name {
          color: rgba(153, 92, 78, 1);
          left: 52.7%;
          top: 11%;
        }
      }
      .country3 {
        span.dot {
          background: rgba(204, 103, 16, 1);
          left: 66.2%;
          top: 14.2%;
        }
        span.country-name {
          color: rgba(204, 103, 16, 1);
          left: 66.2%;
          top: 14.2%;
        }
      }
      .country4 {
        span.dot {
          background: rgba(41, 153, 198, 1);
          left: 11.8%;
          top: 46%;
        }
        span.country-name {
          color: rgba(41, 153, 198, 1);
          left: 11.8%;
          top: 46%;
        }
      }
      .country5 {
        span.dot {
          background: rgba(9, 114, 130, 1);
          left: 11.8%;
          top: 61.8%;
        }
        span.country-name {
          color: rgba(9, 114, 130, 1);
          left: 11.8%;
          top: 61.8%;
        }
      }
      .country6 {
        span.dot {
          background: rgba(48, 84, 142, 1);
          left: 15%;
          top: 67.5%;
        }
        span.country-name {
          color: rgba(48, 84, 142, 1);
          left: 15%;
          top: 67.5%;
        }
      }

      .country7 {
        span.dot {
          background: rgba(37, 21, 146, 1);
          left: 34%;
          top: 70.5%;
        }
        span.country-name {
          color: rgba(37, 21, 146, 1);
          left: 34%;
          top: 70.5%;
        }
      }

      .country8 {
        span.dot {
          background: rgba(120, 0, 150, 1);
          left: 52.9%;
          top: 92.8%;
        }
        span.country-name {
          color: rgba(120, 0, 150, 1);
          left: 52.9%;
          top: 92.8%;
        }
      }
    }
  }
}
</style>
