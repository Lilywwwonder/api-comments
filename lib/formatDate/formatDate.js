// Приводим дату к формату ДД/ММ/ГГГГ ЧЧ:ММ
export const formatDateToRu = (date) => {
  return `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}.${
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }.${date.getFullYear()} ${
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
};

// Приводим дату к формату yyyy-mm-dd hh:mm:ss
export const formatDateToSw = (date) => {
  return `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()} ${
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  }.${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}.${
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
  }`;
};
