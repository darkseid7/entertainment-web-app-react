const dataAdapter = (data) => {
  return data.map((item) => {
    return {
      title: item.title,
      year: item.year,
      category: item.category,
      isBookmarked: item.isBookmarked,
      isTrending: item.isTrending,
      rating: item.rating,
      thumbnail: {
        trending: {
          small: item.thumbnail.trending?.small,
          large: item.thumbnail.trending?.large,
        },
        regular: {
          large: item.thumbnail.regular.large,
          medium: item.thumbnail.regular.medium,
          small: item.thumbnail.regular.small,
        },
      },
    };
  });
};

export default dataAdapter;
