import { defineStore } from 'pinia';

// 导入 Element Plus 中英文语言包

// setup
export const useAppStore = defineStore('app', () => {
	// state
	const device = '';
	const size = 1234;
	const language = '';

	const sidebarStatus = '';

	const sidebar = reactive({
		withoutAnimation: false,
	});
	const activeTopMenu = '';
	/**
	 * 根据语言标识读取对应的语言包
	 */
	const locale = computed(() => {});

	// actions
	function toggleSidebar() {}

	function closeSideBar(withoutAnimation: boolean) {
		sidebar.withoutAnimation = withoutAnimation;
	}

	function openSideBar(withoutAnimation: boolean) {
		sidebar.withoutAnimation = withoutAnimation;
	}

	function toggleDevice(val: string) {}

	function changeSize(val: string) {}
	/**
	 * 切换语言
	 *
	 * @param val
	 */
	function changeLanguage(val: string) {}
	/**
	 * 混合模式顶部切换
	 */
	function changeTopActive(val: string) {}
	return {
		device,
		sidebar,
		language,
		locale,
		size,
		activeTopMenu,
		toggleDevice,
		changeSize,
		changeLanguage,
		toggleSidebar,
		closeSideBar,
		openSideBar,
		changeTopActive,
	};
});

export default useAppStore;
