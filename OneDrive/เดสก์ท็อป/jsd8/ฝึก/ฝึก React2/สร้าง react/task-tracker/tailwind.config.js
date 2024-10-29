/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ตรวจจับไฟล์ React ใน src
  ],
  theme: {
    extend: {}, // สามารถปรับแต่งธีมได้ที่นี่
  },
  plugins: [], // ปลั๊กอินเพิ่มเติม (ถ้ามี)
};
