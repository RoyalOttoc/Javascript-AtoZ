const input = document.querySelector("#inputAge");
const answer = document.querySelector("#answer");

input.addEventListener("input", (e) => {
    let value = e.currentTarget.value;
    let intValue = Number.parseInt(value);
    if (intValue > 0) {

        const nextAge = intValue + 1
        return answer.innerHTML = nextAge;
    }
    return answer.innerHTML = 0
})