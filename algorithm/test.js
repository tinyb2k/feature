function countVietnameseCharacters(input) {
  // Tạo một biểu thức chính quy để tìm các ký tự Telex Tiếng Việt
  const vietnameseCharactersRegex = /aw|aa|dd|ee|oo|ow|w/g;

  // Sử dụng hàm match để tìm tất cả các ký tự Tiếng Việt trong chuỗi nhập vào
  const matches = input.match(vietnameseCharactersRegex);

  // Nếu không tìm thấy kết quả, tức là không có ký tự Tiếng Việt trong chuỗi
  if (!matches) {
    return {
      count: 0,
      characters: []
    };
  }

  // Trả về số lượng ký tự Tiếng Việt đã tìm thấy và danh sách các ký tự
  return {
    count: matches.length,
    characters: matches
  };
}

// Test với ví dụ
const inputString = "hfdawhwhcoomdd";
const result = countVietnameseCharacters(inputString);
console.log(`Output: ${result.count} (${result.characters.join(", ")})`);
