# Nzr Script

Nzr Script is a new programming language. It's very modern, and easy to learn. No programming experience required.

## Install & Run

Install from npm
```bash
npm i -g nzr-script
```
Or Clone this repository
```bash
git clone https://github.com/nizaralghifary/nzr-script.git
```

### Run

If you install from npm, run nzr script using `nzr` command

```bash
nzr example/example1.nzr
```

Or run from this repository
```
node interpreter.js example/example1.nzr
```
**Repl Mode**

Run Repl Mode
```bash
nzr
```
Version
```bash
nzr --version
```
Help
```bash
nzr --help
```
## Example 

Example : 

```
anggep umur itu 21
nampilin "umur kamu " + umur
kalo umur lebih gede 20
  nampilin "kamu tua"
  anggep umurku itu umur + 10 
  nampilin "kalo umurku " + umurku
  kalo umurku lebih gede 30
    nampilin "aku lebih tua"
  udahlah
kalogak
  nampilin "dasar bocil"
udahlah
nampilin "udahan lah"
```

```anggep jumlah itu 5
nampilin "Jumlah: " + jumlah

ganti jumlah itu 12
nampilin "Jumlah: " + jumlah

anggep isActive itu bener
nampilin "Active: " + isActive

cobain i sampe 10
  kalo i lebih gede 3
    nampilin "Loop ke " + i
  kayaknya i itu 3 
    nampilin "Loop ke 3 : " + (i == 3)
  udahlah
udahlah
```

### Command

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.

- [List Command](Command.md)

### Disclaimer

This project is just for fun. It is a reimplementation of jaksel-language. This project is intended for educational purposes only and is not production-ready