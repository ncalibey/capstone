var canJump = function(nums) {
  let jumpsLeft = 1;

  for (let i = 0; i < nums.length - 1; i += 1) {
    jumpsLeft -= 1;

    if (nums[i] > jumpsLeft) jumpsLeft = nums[i];
    if (jumpsLeft === 0) return false;
  }

  return true;
};

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
