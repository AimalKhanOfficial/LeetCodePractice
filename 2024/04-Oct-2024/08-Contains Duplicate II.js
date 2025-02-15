/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
//Why not just say something along the lines of "Find 2 numbers in the array that are equal and are at most k apart from each other."?
var containsNearbyDuplicate = function(nums, k) {
    const allCombos = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
                console.log('>> all', i, j, nums[i] , nums[j]);
                allCombos.push(true);
            }
        }
    }
    console.log('>> all', allCombos);
    return allCombos.length === 2 ? true : false;
};

console.log('>>', containsNearbyDuplicate(nums = [313,64,612,515,412,661,244,164,492,744,233,579,62,786,342,817,838,396,230,79,570,702,124,727,586,542,919,372,187,626,869,923,103,932,368,891,411,125,724,287,575,326,88,125,746,117,363,8,881,441,542,653,211,180,620,175,747,276,832,772,165,733,574,186,778,586,601,165,422,956,357,134,857,114,450,64,494,679,495,205,859,136,477,879,940,139,903,689,954,335,859,78,20], k = 22))