import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import AccountManagement from "../components/AccountManagement.vue";
import HelloWorld from "../components/HelloWorld.vue";
// import Sidebar from "../components/Sidebar.vue";


const routes = [
	{
		path: "/",
		name: "helloworld",
		component: HelloWorld,
	},
	// {
	// 	path: "/sidebar",
	// 	name: "sidebar",
	// 	component: Sidebar,
	// },

	{
		path: "/account-management",
		name: "AccountManagement",
		component: AccountManagement,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
