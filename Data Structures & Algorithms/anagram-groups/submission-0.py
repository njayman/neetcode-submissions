class Solution:

    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groupMap = {}

        for item in strs:
            sortedKey = ''.join(sorted(item))

            if sortedKey not in groupMap:
                groupMap[sortedKey] = []
            
            groupMap[sortedKey].append(item)

        
        return list(groupMap.values())

            
        