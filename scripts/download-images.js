const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, '../public/images');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const assets = [
  { filename: 'maintenance-home.png', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFbkb8r6O-JMiKiAOpWTDznM71Ph_R4PvpsF98cjS_0H0c6VFF2ZGiBVNPH0XG-GWOxu030ZuloMbyigaPYGNAzE-WYOQbqLSSNbIB1Rk79XqHY3IiW_dkbVGiEkjrIiez-V_TsWibJiIoITdFl5h3oFm-YR74aUYWunvDY-3pyctV2LcGeiOQ_Us-ykSBHMpwZ3Spy3JriL1vxffH7xpdMinrDaODNZIndyCmuWYztHOP3pfkSaYOBYIjimS5hM4fTxQPaHVxMccN' },
  { filename: 'spc-home.png', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkzebZ1VLfAOU475kunqb__cq7RvIwY6fd382aOPryDIOYbpp_6o2sEx6ja4LggoN5myiHLG6cyCmGECum6X4gPU5KwHtgnfX1e_L9v-mduO89ar2vvdd5qUDQPaapinTMc6ldCxUJkTrIxapqw_6U3dczSwYQwC16EmJMzpzs4xEdTyhsNoA8dydviZRr_CQtvIkojdLpMUxe5gXpm_HMKly_mApnLBE_PmIg-3UTEZIPAeG7mKa7k0A-6Bud2Xyd2e84Z2W6Auw5' },
  { filename: 'leak-home.png', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdcuvOMGUI5-kjiLNxUa44imwP13omW8iIFQ3NaJBNYvYxTh1tNlDWnL6dI3I6m7dRT5-bG67aLyZy7_co_axpQIBME7jQO5Hx8MGIIRfPjWq0SenC5AK8LB7JEnk8Jt8KodXEcsz7awMIM_eS6bVJ5anApPN41bVlEtH72jHC7ir40D68oHwGbVsaulSDI47zFZYI9eEoIBuS3zxy4GFlzLHVF7P80r2tienI3JC6gApl3TX97T2T9p6HydICzmojR-kDGB3btamx' },
  { filename: 'maintenance-work.png', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaV5na2Tqd-Upcthsdk0V5UGYVrDlEJPuF0bMJn3-f-7jAY_exuq4w9jkljFFVexnuyvVHjewXpr1i29L1bVqVxIppQENTRRldrOvmG5eUbW2v9ONkai4Ety0Y8PGaHQSxRjaeEnN50m54fX-gz6D1cEbGP0e3_nk3IQmD-ICtmnE_TRqyREYWKHP9omjC96pkzyG5ZSN_f0eYf7K8n30XzEOIQ0xKL0XWTAocDH7VhMyO0gN1I9k8q-9RjAq7FqwCOjBzO3Ily4X5' },
  { filename: 'spc-work.png', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa81OG2_fBT7ozTBkQxsZOJ0VlcqK5oL4Me_lI9P6dgzk4gKjrm2Fr8SeAS5_XaeVenZTgKUfEDVOg0XY2uPGUdxFm-r4MPX9XGRxuIimo9GKKlu5JmwjPEel_hjfrhNC6uFqiD8kZ2zh9Lz_eWYQ5UJLZT41m5vD8h1SG1DZlZwNTXXyc3xc2AVGyWLygHLv4gnapPht194w_3YNX2qBJdapTY5fEw2cXmsECRrHjVxiYquVy65T1VA3_WfmlshPxfXVLT7wmwg5D' },
  { filename: 'leak-work.png', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-0G9yGS-LCXxzT_aDgrb1hNkhsZk7KeAuK53KWQZ7QpRe8pFzCISNybuZv1bznl4zvTkpapMdSBj_Ves7v_SbbNzHtj5Q3PaaW6ku4A45MCRAZw1DypX_RYRbF2h76Htzjn-D5VzunoYxnY3SXqPN6p7sBRF_DJp8jJYpHFZJiCHmJ4whY9IqdkXhqxsyvzlylVBKUD0r2hQuwnH5CrgLBOuORaOJIhEGROTsM_C9wSs_aUom3MjnN2eUFtTbttWG4Bjbn5tdRg04' },
  { filename: 'procurement-work.png', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD190X5NIgeMmTDd4AOcnbpAz0XAKV-ll4CVA6SFNGnwCIM7Nyo6a3WdZrlsJwvMp5eO94RVbWdxJ8SvvQqPGjb_SIrKOD_SLvYTqK9qTlusnkx74aeGsdku0z64mwTvSy5VQXsxivRKIlbAcLdSNGa0gBnNVnBg4dtoXMMFq8PLlLNReyDww2rWWLLB711XxEGfWlRPRMghoXX6MVDNs-BxOGky9T-fdbwmq_86OodQ0GhypjjUkYDJyHONqzngqrcjfxW6ED0XNC' },
  { filename: 'incident-work.png', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbtvvcSPjPY7BQOushWnU10HOr89DglrQK4ShcqULA8_Ss9NwOzNivhjprT4dZPpbXJCRUPj9SD139AGKrU9almf5nAtDApsemE66LULocnfLfD2MTIJiNzucKnFBpgiYlNChir2V_kp8W6xZM-Mp9vGUgCE6BW_WADpbAbMn4Zq3oXD7G-94zPU85nd7QCiG1b-keTbhSMYMp9I1TBrQnyg7kNhzoEIFSStQ_rqWvpHQrA5CvtDbAaTLfVexcEjXA4Zh5n1EqJQ5V' }
];

let completed = 0;
assets.forEach(asset => {
  const filePath = path.join(dir, asset.filename);
  const file = fs.createWriteStream(filePath);
  https.get(asset.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      completed++;
      console.log(`Downloaded ${asset.filename}`);
      if (completed === assets.length) {
        console.log('All downloads finished successfully!');
      }
    });
  }).on('error', err => {
    fs.unlink(filePath, () => {});
    console.error(`Error downloading ${asset.filename}:`, err.message);
  });
});
