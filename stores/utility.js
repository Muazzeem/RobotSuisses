import { defineStore } from "pinia";
import { PUBLIC_SETTINGS_ENDPOINT, PAGE_API_ROOT } from "@/utils/endpoints";

export const useUtilityStore = defineStore("utilityStore", {
  state: () => ({
    settings: null,
    socials: null,
    main_menus: null,
    footer_menus: null,
    robots: null,
    isSettingsLoaded: false,
    isRobotsLoaded: false,
  }),

  getters: {
    getSettings: (state) => state.settings,
    getSocials: (state) => state.socials,
    getMainMenus: (state) => state.main_menus,
    getFooterMenus: (state) => state.footer_menus,
    getRobots: (state) => state.robots,
  },

  actions: {
    async fetchSettings() {
      if (this.isSettingsLoaded) {
        return;
      }

      try {
        const config = useRuntimeConfig();
        const data = await $fetch(`${PUBLIC_SETTINGS_ENDPOINT}/`, {
          baseURL: config.public.baseURL,
        });

        this.settings = data?.basic_setting || null;
        this.socials = data?.social_setting || null;
        this.main_menus = data?.main_menus || [];
        this.footer_menus = data?.footer_menus || [];
        this.isSettingsLoaded = true;

        return data;
      } catch (error) {
        console.error("Failed to fetch settings:", error);
        throw error;
      }
    },
    async fetchRobots() {
      if (this.isRobotsLoaded) {
        return;
      }

      try {
        const config = useRuntimeConfig();
        const data = await $fetch(`${PAGE_API_ROOT}/?type=home.RobotDetailsPage&fields=title_en,title_de_ch,title_fr_ch,title_it_ch,thumbnail,fetch_parent,slug`, {
          baseURL: config.public.baseURL,
        });

        this.robots = data?.items || [];
        this.isRobotsLoaded = true;

        return data;
      } catch (error) {
        console.error("Failed to fetch robots:", error);
        throw error;
      }
    }
  },
});

export const truncateText = (text, length) => {
  if (text.length > length) {
    return text.substring(0, length) + " ...";
  }
  return text;
};

export const getLocaleField = (data, field, lang) => {
	const isDefault = lang === "en";
	const localizedField = isDefault ? field : `${field}_${lang}`;
	let x = data[localizedField] || data[field] || "";
	return x;
};
