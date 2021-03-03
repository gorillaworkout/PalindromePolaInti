

const Palindrome = (kata) => {
  const karakter = kata.toLowerCase().replace(/[^a-z]/g, '') .split('');
  if (karakter.join('') === karakter.reverse().join('')) {
    return `${kata} adalah Palindrome`; 
    } else { return `${kata} bukanlah Palindrome`;
      }
    }
  const hasil = Palindrome("Kodok"); 

  console.log(hasil);
  console.log(Palindrome('Malam'))
  