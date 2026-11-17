
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `我是${this.name}，今年${this.age}歲`;
    }
}

function showStudent() {
    const student = new Student("小明", 20);
    document.getElementById("result").innerText =
        student.introduce();
}
