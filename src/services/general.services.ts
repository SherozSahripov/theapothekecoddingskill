import axios from "axios";
export const generalService = async (body: any) => {
  try {
    let url = "https://api.github.com/search/repositories?q=sort=stars";
    let result: any = [];
    const { topNo, star, fromDate, prLang } = body;
    if (star) {
      url = `https://api.github.com/search/repositories?q=stars:${star}`;
    }
    if (fromDate) {
      url = `https://api.github.com/search/repositories?q=created:${fromDate}`;
    }
    if (prLang) {
      url = `https://api.github.com/search/repositories?q=language:${prLang}`;
    }
    if (fromDate && prLang) {
      url = `https://api.github.com/search/repositories?q=created:${fromDate}+language:${prLang}`;
    }
    const { data } = await axios({
      method: "get",
      url: url,
    });
    if (!data) {
      return {
        message: "No data found",
        status: false,
      };
    }
    result = data;
    if (topNo) {
      result = data.items.slice(0, topNo);
      return {
        total_count: result.length,
        result: result,
      };
    }
    return result;
  } catch (error) {
    throw error;
  }
};
