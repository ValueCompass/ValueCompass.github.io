<template>
  <div class="about-us-template main-container" style="padding: 0">
    <div class="container teams-container">
      <div class="hero" style="background: transparent; padding-top: 2em">
        <div class="hero__content" style="padding: 0; text-align: center">
          <h1 class="hreo_name">Introducing Our Team!</h1>
        </div>
      </div>
      <div class="content" style="padding-top: 1em">
        <!-- <h2 class="team-head">Employees</h2> -->
        <div class="team-head">
          <!-- <h2 style="background-image: url({{site.baseurl}}/images/employees.png)">Employees</h2> -->
        </div>

        <div class="team-members">
          <div
            class="one-member"
            style="align-items: center"
            v-for="(member, index) in employees"
            :key="index"
          >
            <div class="member__image" v-if="member.photo">
              <img :src="getAssetsFile(member.photo)" :alt="member.name" />
            </div>
            <div class="member-info">
              <h3 class="member__name">{{ member.name }}</h3>
              <p class="member__position">{{ member.position }}</p>
              <!-- <a href="mailto:{{ member.email }}" class="member__email">{{ member.email }}</a> -->
              <p class="member__institution">{{ member.institution }}</p>
            </div>
          </div>
        </div>

        <!-- <h2 class="team-head">Collaborators</h2> -->
        <div class="team-head">
          <h2 class="Collaborators-head">Collaborators</h2>
        </div>

        <div class="team-members" style="align-items: center">
          <div
            class="one-member"
            style="align-items: center"
            v-for="(member, index) in collaborators"
            :key="index"
          >
            <div class="member__image" v-if="member.photo">
              <img :src="getAssetsFile(member.photo)" :alt="member.name" />
            </div>
            <div class="member-info">
              <h3 class="member__name">{{ member.name }}</h3>
              <p class="member__position">{{ member.position }}</p>
              <!-- <a href="mailto:{{ member.email }}" class="member__email">{{ member.email }}</a> -->
              <p class="member__institution">{{ member.institution }}</p>
            </div>
          </div>
        </div>

        <!-- <div class="row"> -->
        <!-- <h2 class="team-head">Interns</h2> -->
        <div class="team-head">
          <h2>Interns and Developers</h2>
        </div>

        <div class="team-members">
          <div
            class="one-member"
            v-for="(member, index) in interns"
            :key="index"
          >
            <div class="member__image" v-if="member.photo">
              <img :src="getAssetsFile(member.photo)" :alt="member.name" />
            </div>
            <div class="member-info">
              <h3 class="member__name">{{ member.name }}</h3>
              <p class="member__position">{{ member.position }}</p>
              <!-- <a href="mailto:{{ member.email }}" class="member__email">{{ member.email }}</a> -->
              <!-- <p style="color: ">{{ member.workIntro }},</p> -->
              <p class="member_intern_content">
                <template v-if="member.workIntro == 'Algorithm Research'">
                  <span style="color: #8d7200">{{ member.workIntro }},</span
                  ><br />
                </template>
                <template v-else>
                  <span style="color: #a66800">{{ member.workIntro }},</span
                  ><br />
                </template>
                <span>{{ member.InternshipTime }}</span>
              </p>
              <p class="member__institution">{{ member.institution }}</p>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const getAssetsFile = (url:any) => {
  return new URL(`../assets/teams/${url}`, import.meta.url).href;
};
const employees = ref([
  {
    name: "Xing Xie",
    photo: "Xing_Xie.png",
    position: "Partner Research Manager",
    institution: "Microsoft Research Asia",
  },
  {
    name: "Xiaoyuan Yi",
    photo: "Xiaoyuan_Yi.png",
    position: "Senior Researcher",
    institution: "Microsoft Research Asia",
  },
  {
    name: "Jing Yao",
    photo: "Jing_Yao.png",
    position: "Researcher",
    institution: "Microsoft Research Asia",
  },
  {
    name: "Beibei Shi",
    photo: "Beibei_Shi.png",
    position: "Senior Research  PM",
    institution: "Microsoft Research Asia",
  },
  {
    name: "Scarlett Li",
    photo: "scarlett.png",
    position: "Principal Research PM Manager",
    institution: "Microsoft Research Asia",
  },
  {
    name: "Yang Ou",
    photo: "ouyang.png",
    position: "Senior Designer",
    institution: "Microsoft Research Asia",
  },
]);

const collaborators = ref([
  {
    name: "Xiting Wang",
    photo: "Xiting_Wang.png",
    position: "Assistant Professor",
    institution: "Renmin University of China",
  },
  {
    name: "Peng Zhang",
    photo: "Peng_Zhang.png",
    position: "Associate Professor",
    institution: "School of Computer Science, Fudan University",
  },
  {
    name: "Linus Huang",
    photo: "Linus_Huang.png",
    position: "Assistant Professor",
    institution:
      "Division of Humanities, Hong Kong University of Science and Technology",
  },
]);

const interns = ref([
  {
    name: "Yifan Gong",
    photo: "Yifan_Gong.png",
    position: "Undergraduate Student",
    institution:
      "College of Computer Science and Electronic Engineering, Hunan University",
    workIntro: "Algorithm Research",
    InternshipTime: "Internship Period 2023.10-2024.05",
  },
  {
    name: "Shitong Duan",
    photo: "Shitong_Duan.png",
    position: "Master Student",
    institution: "School of Computer Science, Fudan University",
    workIntro: "Algorithm Research",
    InternshipTime: "Internship Period 2023.04-2023.10",
  },
  {
    name: "Xingqi Wang",
    photo: "Xingqi_Wang.png",
    position: "PhD Student",
    institution:
      "Department of Computer Science and Technology, Tsinghua University",
    workIntro: "Algorithm Research",
    InternshipTime: "Internship Period 2023.02-2023.09",
  },
  {
    name: "Yan Liu",
    photo: "Yan_Liu.png",
    position: "PhD Student",
    institution: "School of Informatics, The University of Edinburgh",
    workIntro: "Algorithm Research",
    InternshipTime: "Internship Period 2023.11-2024.04",
  },
  {
    name: "Yuhan Zeng",
    photo: "Yuhan_Zeng.png",
    position: "Undergraduate Student",
    institution: "Chu Kochen Honors College, Zhejiang University",
    workIntro: "Project Management",
    InternshipTime: "Internship Period 2024.2-2024.7",
  },
  {
    name: "Tiantian Xue",
    photo: "tiantian.png",
    position: "Developer",
    institution: "Microsoft Research Asia",
    workIntro: "Tech Development",
  },
  {
    name: "Geli Guo",
    photo: "geli.png",
    position: "UI&UX Designer",
    institution: "Microsoft Research Asia",
    workIntro: "Tech Development",
  },
]);
</script>
<style scoped lang="scss">
.about-us-template {
  line-height: 1.6;
  .hreo_name {
    font-size: 2.5em;
    color: #1093ff;
  }
  .teams-container {
    color: #2f2f2f;

    .hero {
      padding: 1em 0 0 0.5em;
    }

    .team-head {
      margin: 2.5em 0 0.5em;
      font-weight: 700;
      display: block;

      // border: 1px solid red;
      h2.Collaborators-head {
        background-image: url(@/assets/images/Collaborators.png);
      }
      h2 {
        font-size: 2em;
        background-image: url(@/assets/images/Interns.png);
        background-repeat: no-repeat;
        background-size: 1em auto;
        background-position: left center;
        padding-left: 1.5em;
      }
    }

    .team-members {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-around;
      // border: 1px solid red;
      align-items: flex-start;
      gap: 2%;
      padding: 0 1em;
    }

    .one-member {
      padding: 2em 1em;
      box-sizing: border-box;
      width: 32%;
      display: flex;
      // border: 1px solid red;

      .member__image {
        width: 50%;
        padding-top: 50%;
        object-fit: cover;
        position: relative;

        img {
          border-radius: 9px;
          top: 0;
          left: 0;
          position: absolute;
          width: 100%;
        }
      }

      .member-info {
        width: 50%;
        display: flex;
        flex-direction: column;
        padding: 0.5em 0 0.5em 1em;

        .member__name {
          font-size: 1.5em;
          font-weight: 700;
          color: #1093ff;
          margin-bottom: 0.5em;
          // margin-bottom: 10px;
        }

        .member__position {
          font-size: 1.125em;
          font-weight: 700;
          margin-bottom: 0.3em;
        }
        .member_intern_content {
          margin-bottom: 0.5em;
          font-size: 0.8em;
        }

        .member__institution {
          font-weight: 600;
          margin-top: 0.3em;
        }

        .member__email {
          color: #2f2f2f;
          text-decoration: underline;
        }
      }
    }
  }

  // @media only screen and (max-width: 1200px) {
  //   .teams-container {
  //     .content {
  //       font-size: 0.8em;
  //     }
  //     .team-members {
  //       gap: 10%;
  //     }
  //     .one-member {
  //       width: 45% !important;
  //     }
  //   }
  // }

  // @media only screen and (max-width: 600px) {
  //   .teams-container {
  //     .team-members {
  //       gap: 0%;
  //       padding: 0;
  //     }
  //     .one-member {
  //       width: 100% !important;
  //     }
  //   }
  // }
}
</style>
