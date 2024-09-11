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

createSlice({
  name: "counter",
  initialState: { count: 0, is_dark_theme: true },
});
