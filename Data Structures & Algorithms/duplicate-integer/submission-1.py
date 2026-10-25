class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        dupMap = {}
        found = False
        for n in nums:
            if n not in dupMap:
                dupMap[n] = ''
            else:
                found = True

        return found 