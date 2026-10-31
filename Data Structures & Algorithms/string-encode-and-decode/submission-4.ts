class Solution {
    rotateForward(str: string, step: number): string {
        const codePoint = str.codePointAt(0) ?? 0
        return String.fromCodePoint(codePoint + step)
    }
    
    rotateBackward(str: string, step: number): string {
        const codePoint = str.codePointAt(0) ?? 0
        return String.fromCodePoint(codePoint - step)
    }

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map(str => {
            const chars = [...str]
            const len = chars.length
            const rotated = chars.reverse().map(s => this.rotateForward(s, len)).join("")
            return `${len}#${rotated}`
        }).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res: string[] = []
        let i = 0;
        const codePoints = [...str];

        while (i < codePoints.length) {
            let j = i;
            while (codePoints[j] !== "#")  {
                j++
            }

            const len = parseInt(codePoints.slice(i,j).join(""),10)
            const estrChars = codePoints.slice(j+1, j+1+len);
            const orgStr = estrChars
            .reverse()
            .map(estr => this.rotateBackward(estr, len)).join("");

            res.push(orgStr)

            i = j + 1 + len
        }

        return res
    }
}