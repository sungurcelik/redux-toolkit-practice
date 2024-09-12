/**
 * Hem reducer'ları, hem aksiyonları
 * farklı dosyalarda oluşturmak yerine slice yapısı oluşturarak ikisini de tek noktada tanımlayabiliyoruz.
 * ? slice oluşturmak:
 * 1) import createSlice
 * 2) gerekli parametreleri tanımla
 * -- name: slice ismi "string"
 * -- initialState: başlangıç değeri
 * -- reducers: aksiyonların görevini tanımladığımız fonksiyonlar.
 */

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, is_dark_theme: true },
  /** state'in nasıl değişeceğine karar veren fonksiyonlar
   * reducer/aksiyon fonksiyonları
   * iki parametre alırlar
   * 1 - state'in son hali
   * 2 - aksiyon objesi
   * aksiyon fonksiyonlarının redux'taki reducer'larda
   * tanımladığımız case'lerden temel farkı doğudan güncelleme
   */
  reducers: {
    increase: (state) => {
      state.count++;
    },

    decrease: (state) => {
      state.count !== 0 && state.count--;
    },
    // payloadı kullanacaksan action'u alırız
    setCount: (state, action) => {
      state.count = action.payload;
    },

    changeTheme: (state) => {
      state.is_dark_theme = !state.is_dark_theme;
    },
  },
});

// createSlice methodu bizim için klasik redux'ta switch case'lerle
// tanımladığımız reducer fonksiyonları kendisi oluşturur
export default counterSlice.reducer;

// createSlice methodu bizim oluşturduğumuz aksiyon oluşturan fonksiyonları kendisi otomatik olarak oluştutur.
// export edip ilgili bileşenlerde kullanılır.
export const { increase, decrease, setCount, changeTheme } = counterSlice.actions;
