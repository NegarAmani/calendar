export interface MonthInfo {
  name: string;
  image: string;
  poem: string;
  poet: string;
}

export const persianMonths: Record<number, MonthInfo> = {
  1: {
    name: 'فروردین',
    image: '/assets/ordibehesht.jpg',
    poem: 'بهار آمد، بهار آمد، خوش آمد\nنگار آمد، نگار آمد، خوش آمد',
    poet: 'مولانا'
  },
  2: {
    name: 'اردیبهشت',
    image: '/assets/ordibehesht.jpg',
    poem: 'چو اردیبهشت آید و باد نرم\nجهان پر شود از خوشی و هوای گرم',
    poet: 'فردوسی'
  },
  3: {
    name: 'خرداد',
    image: '/assets/khordad.jpg',
    poem: 'خرداد ماه و باغ پر از لاله و سمن\nبلبل به شاخسار سرود غزل سرا',
    poet: 'سعدی'
  },
  4: {
    name: 'تیر',
    image: '/assets/tir.jpg',
    poem: 'تیر مه و گرمای تابستان\nدر کوچه و بازار، تن آسان',
    poet: 'شهریار'
  },
  5: {
    name: 'مرداد',
    image: '/assets/mordad.jpg',
    poem: 'مرداد و گرمای نیمروزی\nدر سایه درختان، پیروزی',
    poet: 'نیما یوشیج'
  },
  6: {
    name: 'شهریور',
    image: '/assets/shahrivar.jpg',
    poem: 'شهریور و باد خنک پاییز\nبرگ درختان در رقص و خیز',
    poet: 'سهراب سپهری'
  },
  7: {
    name: 'مهر',
    image: '/assets/mehr.jpg',
    poem: 'مهر آمد و مهربانی آورد\nرنگ خزان و کامرانی آورد',
    poet: 'حافظ'
  },
  8: {
    name: 'آبان',
    image: '/assets/aban.jpg',
    poem: 'آبان و باران پاییزی\nدر کوچه‌ها عطر تمیزی',
    poet: 'فروغ فرخزاد'
  },
  9: {
    name: 'آذر',
    image: '/assets/azar.jpg',
    poem: 'آذر آمد با سوز سرما\nگرمای دل در شب یلدا',
    poet: 'اخوان ثالث'
  },
  10: {
    name: 'دی',
    image: '/assets/azar.jpg',
    poem: 'دی ماه و برف و سرمای زمستان\nآتش به دل، گرمای زمستان',
    poet: 'رهی معیری'
  },
  11: {
    name: 'بهمن',
    image: '/assets/bahman.jpg',
    poem: 'بهمن و برف سپید بر زمین\nآسمان و زمین شده همنشین',
    poet: 'شفیعی کدکنی'
  },
  12: {
    name: 'اسفند',
    image: '/assets/esfand.jpg',
    poem: 'اسفند و بوی بهار در راه\nنوروز می‌آید از سحرگاه',
    poet: 'هوشنگ ابتهاج'
  }
};