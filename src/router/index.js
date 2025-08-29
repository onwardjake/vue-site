import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Day02 from "../components/day02_20250825/Day02.vue";
import Day03 from "../components/day03_20250826/Day03.vue";
import Day04 from "../components/day04_20250827/Day04.vue";
import Cwdd from "../components/day05_20250828/Cwdd.vue";
import Ex01 from "../components/day02_20250825/Ex01.vue";
import Ex02 from "../components/day02_20250825/Ex02.vue";
import Ex03 from "../components/day02_20250825/Ex03.vue";
import A1 from "../components/day05_20250828/a1/a1.vue";
import A2 from "../components/day05_20250828/a2/a2.vue";
import A3 from "../components/day05_20250828/a3/a3.vue";
import A4 from "../components/day05_20250828/a4/a4.vue";
import B1 from "../components/day05_20250828/b1/b1.vue";


const routes = [
    { path: '/', name: 'Home', component: HomeView },
    {
        path: '/day02', name: 'Day02', component: Day02,
        children: [
            {path: '/day02/ex01', name:'bind', component: Ex01},
            {path: '/day02/ex02', name:'if', component: Ex02},
            {path: '/day02/ex03', name:'show', component: Ex03},
        ]
    },
    { path: '/day03', name: 'Day03', component: Day03 },
    { path: '/day04', name: 'Day04', component: Day04 },
    {
        path: '/cwdd', name: 'Cwdd', component: Cwdd,
        children: [
            {path: '/cwdd/a1', name:'JUST 쇼핑몰', component:A1},
            {path: '/cwdd/a2', name:'Green 복지재단', component:A2},
            {path: '/cwdd/a3', name:'강원천문대', component:A3},
            {path: '/cwdd/a4', name:'유진건설', component:A4},
            {path: '/cwdd/b1', name:'대한은행', component:B1},
        ]
     },  
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router