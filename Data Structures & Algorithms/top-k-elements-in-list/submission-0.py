class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freqMap = {}

        for num in nums:
            if num not in freqMap:
                freqMap[num] = 0
            freqMap[num] += 1
        
        sorted_nums = sorted(freqMap.keys(), key=freqMap.get, reverse = True)
        
        return sorted_nums[:k]