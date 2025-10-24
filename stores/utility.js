import { defineStore } from "pinia";
import { PUBLIC_SETTINGS_ENDPOINT } from "@/utils/endpoints";

export const useUtilityStore = defineStore("utilityStore", {
  state: () => ({
    settings: null,
    socials: null,
    main_menus: null,
    footer_menus: null,
    robots: null,
    isLoaded: false,
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
      if (this.isLoaded) {
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
        this.isLoaded = true;

        return data;
      } catch (error) {
        console.error("Failed to fetch settings:", error);
        throw error;
      }
    },
    async fetchRobots() {
      if (this.isLoaded) {
        return;
      }

      try {
        const config = useRuntimeConfig();
        const data = await $fetch(`http://localhost:8000/api/v2/pages/?type=home.RobotDetailsPage&fields=title_en,title_de_ch,title_fr_ch,title_it_ch,short_description_en,short_description_de_ch,short_description_fr_ch,short_description_it_ch,thumbnail,author,tags_en,tags_de_ch,tags_fr_ch,tags_it_ch,fetch_parent,last_published_at,body,is_featured,slug`, {
          baseURL: config.public.baseURL,
        });

        this.robots = data?.items || [];
        console.log(data);
        this.isLoaded = true;

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
