// Given two arrays return their intersection. It can be returned in any order.
// Each element should be returned as many times as it shows in both arrays.

let intersect = (nums1, nums2) => {
  let intersection = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        intersection.push(nums1[i]);
        nums2.splice(j, 1);
        break;
      }
    }
  }
  return intersection;
};

console.log(intersect([1,2,2,1], [2,2])); // [2,2]
console.log(intersect([4,9,5], [9,4,9,8,4])); // [4,9]