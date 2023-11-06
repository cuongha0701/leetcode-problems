class Solution {

    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> hashMap = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            Integer index = hashMap.get(nums[i]);
            if (index != null) {
                return new int[] { i, index };
            }
            hashMap.put(target - nums[i], i);
        }

        return nums;
    }
}
