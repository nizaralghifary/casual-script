## Command

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.

### Output
```
nampilin "hello world"
// console.log("hello world")
```

### Variable
Assign Variable
```
anggep a itu "hello world"
// let a = "hello world"
pasti b itu 12345
// const b = 12345
```
Reassign Variable
```
ganti a itu "hello"
// a = "hello"
```

### Boolean
```
anggep a itu bener
// let a = true
anggep a itu salah
// let a = false
```

### Condition
```
kalo hariini itu "mendung"
  nampilin "hariini lagi hujan"
udahlah

// if (hariini == "mendung") {
  console.log("hariini lagi hujan")
}
```
```
kalo x lebih gede 5 
  nampilin "nilai x lebih dari 5"
kayaknya x itu 5 
  nampilin "nilai x itu 5"
kalogak
  nampilin "nilai x kurang dari 5"
  
// if (x > 5) {
  console.log("nilai x lebih dari 5")
} else if (x == 5) {
  console.log("nilai x itu 5")
} else {
  console.log("nilai x kurang dari 5")
}
```

### Comparison 
- `itu`: ' == ',
- `gak`: ' != ',
- `lebih gede`: ' > ',
- `lebih kecil`: ' < ',
- `lebih gede sama dengan`: ' >= ',
- `lebih kecil sama dengan`: ' <= '

### Loop

#### **`for` loop**
```
cobain i sampe 10
  kalo i lebih gede 3
    nampilin "loop ke " + i
  udahlah
udahlah

// for (let i = 0; i < 10; i++) {
  if (i > 3){
    console.log("loop ke " + i);
  }
}
```

#### **`for of` loop**
```
cobain semua foo dari bar
  nampilin foo
udahlah

// for (const foo of bar) {
  console.log(foo);
}
```

#### **`break`** and **`continue`**:
```
stop
// break;

skip
// continue;
```

### Function
```
jadi umurx
  anggep umur itu 25
  nampilin "umur kamu " + umur
selesai

panggil umurx

jadi fungsi_param_banyak a b c
    nampilin "a: " + a
    nampilin "b: " + b
    nampilin "c: " + c
selesai

panggil fungsi_param_banyak 3 4 5
```

### Async Function
```
nungguin ya
    anggep umur itu 21
    nampilin "umur kamu " + umur
selesai

panggil ya

jadi fungsi_param_banyak a b c
    nampilin "a: " + a
    nampilin "b: " + b
    nampilin "c: " + c
selesai

panggil fungsi_param_banyak 3 4 5
```

### Try Catch & Exception
```
coba
  nampilin "Something wrong"
  error "Error message"
pantau
  nampilin "Catch error"
yaudahsih
  nampilin "finish finally"
udahlah

// try {
  console.log("Something wrong");
  throw new Error("Error message");
} catch {
  console.log("Catch error");
} finally {
  console.log("finish finally");
} 
```