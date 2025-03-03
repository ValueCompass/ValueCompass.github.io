<template>
  <div class="about-us-template main-container" style="padding: 0">
    <div class="container teams-container">
      <div class="hero" style="background: transparent; padding-top: 3.75em">
        <div class="hero__content" style="padding: 0; text-align: center">
          <img src="@/assets/images/teams-icon.png" alt="" />
          <h1 class="hreo_name">Introducing Our Team!</h1>
        </div>
      </div>
      <div class="content" style="padding-top: 2em">
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
              <div>
                <p class="member__position">{{ member.position }}</p>
                <p class="member_intern_content">
                  <span v-if="member.workIntro">{{ member.workIntro }}</span>
                </p>
              </div>
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

const getAssetsFile = (url: any) => {
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
    institution: "Gaoling School of Artificial Intelligence, Renmin University of China",
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
  {
    name: "JinYeong Bak",
    photo: "JinYeong_Bak.png",
    position: "Associate Professor",
    institution:
      "College of Computing and Informatics, SungKyunKwan University",
  },
  {
    name: "Xiao Zhou",
    photo: "Xiao_Zhou.png",
    position: "Assistant Professor",
    institution:
      "Gaoling School of Artificial Intelligence, Renmin University of China",
  },
]);

const interns = ref([
  {
    name: "Yifan Gong",
    photo: "Yifan_Gong.png",
    position: "Undergraduate Student",
    institutionOld:
      "College of Computer Science and Electronic Engineering, Hunan University",
    workIntro: "Algorithm Research",
    InternshipTime: "Internship Period 2023.10-2024.05",
    institution: "Hunan University",
  },
  {
    name: "Shitong Duan",
    photo: "Shitong_Duan.png",
    position: "Master Student",
    institutionOld: "School of Computer Science, Fudan University",
    workIntro: "Algorithm Research",
    InternshipTime: "Internship Period 2023.04-2023.10",
    institution: "Fudan University",
  },
  {
    name: "Xingqi Wang",
    photo: "Xingqi_Wang.png",
    position: "PhD Student",
    institutionOld:
      "Department of Computer Science and Technology, Tsinghua University",
    workIntro: "Algorithm Research",
    InternshipTime: "Internship Period 2023.02-2023.09",
    institution: "Tsinghua University",
  },
  {
    name: "Yan Liu",
    photo: "Yan_Liu.png",
    position: "PhD Student",
    institutionOld: "School of Informatics, The University of Edinburgh",
    workIntro: "Algorithm Research",
    InternshipTime: "Internship Period 2023.11-2024.04",
    institution: "The University of Edinburgh",
  },
  {
    name: "Yuhan Zeng",
    photo: "Yuhan_Zeng.png",
    position: "Undergraduate Student",
    institutionOld: "Chu Kochen Honors College, Zhejiang University",
    workIntro: "Project Management",
    InternshipTime: "Internship Period 2024.2-2024.7",
    institution: "Zhejiang University",
  },
  {
    name: "Dongyao Zhu",
    photo: "Dongyao_Zhu.png",
    position: "PhD Student",
    institutionOld:
      "Department of Computer Science, North Carolina State University",
    workIntro: "Algorithm Research",
    InternshipTime: "Internship Period 2023.11-2024.08",
    institution: "North Carolina State University",
  },
  {
    name: "Han Jiang",
    photo: "Han_Jiang.png",
    position: "Master Student",
    institutionOld:
      "Department of Computer Science and Technology, Tongji University",
    workIntro: "Algorithm Research",
    InternshipTime: "Internship Period 2024.04-2024.08",
    institution: "Tongji University",
  },
  {
    name: "HyunJin Kim",
    photo: "HyunJin_Kim.png",
    position: "Phd Student",
    institutionOld:
      "Department of Artificial Intelligence, SungKyunKwan University",
    workIntro: "Algorithm Research",
    InternshipTime: "Internship Period 2024.09-2025.03",
    institution: "SungKyunKwan University",
  },
  {
    name: "Muhua Huang",
    photo: "Muhua_Huang.png",
    position: "Master Student",
    institutionOld:
      "School of Computational Social Science, The University of Chicago",
    workIntro: "Interdisciplinary Research",
    InternshipTime: "Internship Period 2024.07-2024.10",
    institution: "The University of Chicago",
  },
  {
    name: "Pablo Biedma",
    photo: "Pablo_Biedma.png",
    position: "Master Student",
    institutionOld:
      "Department of Computer Science and Technology, Tsinghua University",
    workIntro: "Interdisciplinary Research",
    InternshipTime: "Internship Period 2024.07-2024.09",
    institution: "Tsinghua University",
  },
  {
    name: "Yanxu Zhu",
    photo: "Yanxu_Zhu.png",
    position: "Master Student",
    institutionOld:
      "Department of Computer Science and Engineering, Beijing Jiaotong university",
    workIntro: "Algorithm Research",
    InternshipTime: "Internship Period 2024.10-2025.02",
    institution: "Beijing Jiaotong university",
  },
  {
    name: "Bingbing Xu",
    photo: "Bingbing_Xu.png",
    position: "PhD student",
    institutionOld: "School of Information, Renmin University of China",
    workIntro: "Algorithm Research",
    InternshipTime: "Internship Period 2024.1-",
    institution: "Renmin University of China",
  },
  {
    name: "Tianmeng Liu",
    photo: "Tianmeng_Liu.png",
    position: "Master Student",
    institutionOld: "School of Information, Renmin University of China",
    workIntro: "Product Manager",
    institution: "University of Washington",
  },
  {
    name: "Tiantian Xue",
    photo: "tiantian.png",
    position: "Developer",
    institution: "Microsoft Research Asia",
    workIntro: "",
  },
  {
    name: "Geli Guo",
    photo: "geli.png",
    position: "UI&UX Designer",
    institution: "Microsoft Research Asia",
    workIntro: "",
  },
  {
    name: "Xin Hua",
    photo: "Vicky_Hua.png",
    position: "UI&UX Designer",
    institution: "Microsoft Research Asia",
    workIntro: "",
  },
]);
</script>
<style scoped lang="scss">
.about-us-template {
  line-height: 1.6;
  .hero__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.5em;
    img {
      width: 7.5em;
    }
  }
  p,
  h3 {
    line-height: normal;
  }
  .hreo_name {
    font-size: 2.5em;
    color: #004f8f;
    font-weight: 400;
    font-style: italic;
  }
  .teams-container {
    color: #505050;
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
      margin-top: 1.5em;
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-around;
      // border: 1px solid red;
      align-items: flex-start;
      // gap: 2%;
      // padding: 0 1em;
    }

    .one-member {
      // padding: 2em 1em;
      box-sizing: border-box;
      width: 25%;
      display: flex;
      // border: 1px solid red;
      margin-bottom: 2.5em;

      .member__image {
        width: 40%;

        img {
          border-radius: 9px;
          display: block;
          width: 100%;
        }
      }

      .member-info {
        flex: 1;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1 0 0;
        align-items: flex-start;
        align-items: flex-start;
        padding: 0.75em 0.8em;
        align-self: stretch;

        .member__name {
          font-size: 1.5em;
          font-weight: 700;
          color: #004f8f;
        }

        .member__position {
          font-size: 1em;
          font-weight: 700;
        }
        .member_intern_content {
          font-size: 1em;
          font-weight: 700;
        }

        .member__institution {
          font-weight: 600;
        }

        .member__email {
          color: #2f2f2f;
          text-decoration: underline;
        }
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .teams-container .one-member {
      width: 33.333%;
    }
  }

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
