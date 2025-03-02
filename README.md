# Bitmessage - Private Message Broadcasting

## Bitmessage
Bitmessage merupakan sebuah sistem jaringan (networks) yang dapat mengirim pesan secara end to end. Tujuan dari sistem TXP 443 adalah sebagai platform penyedia informasi yang terinspirasi oleh mesin ENIGMA Jerman. 

## Bitmessage Istalasi untuk Pengirim
2. Jika anda ingin menyebar informasi rahasia masuk ke directory (folder) broadcast
`$ cd .\broadcast`
3. Install dependency `$ yarn`
4. Atur file `defineKey.json` 
5. - `port` : untuk proyek development
   - `networkKey` : untuk key pada jaringan
   - `messageKey` : untuk key pada pesan
   - `message` : pesan utama yang ingin di kirim
6. jalankan `yarn run spread`


## Bitmessage untuk pembaca pesan

1. ambil dir `$ cd ./receiver`
2. ketahui networkUrl dan kunci yang telah di tatapkan oleh broadcaster dan atur kunci tersebut di `setKey.json`
3. Jalankan `$ yarn`
4. Jalankan `$ yarn run read`
