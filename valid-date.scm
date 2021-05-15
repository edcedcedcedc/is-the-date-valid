;6.10
(define (remainder? num div)
  (if(= 0 (remainder num div))
     #t
     #f))
(define (month-day-year-valid? month day year)
  (define (month-min-max? num)
    (if(and(>= num 1)(<= num 12))
       #t
       #f))
  (define (day-min-max? num)
    (if (and(>= num 1)(<= num 31))
        #t
        #f))
  
  (define (year-min-max? num)
    (if (and(>= num 1)(<= num 9999999999999))
        #t
        #f))
  (if(and(month-min-max? month)
         (day-min-max? day)
         (year-min-max? year))
     #t
     #f))

(define (leap-month? month year) 
     (if (= 2 month)
         (if (leap-year? year)
             #t
             #f)
         #t))
(define (leap-year? num)
  (if(remainder? num 4)
     (if(remainder? num 100)
        (if(remainder? num 400)
           #t
           #f)
        #t)
     #f))

(define(compare-month-day? month day)
  (define (day-min-max-set? min day max month)
  (if(and(<= min day)(>= max day))
     #t
     #f))

  (define (is-member-30? num)
    (member? num '(4 6 9 11)))
  
  (define (is-member-31? num)
    (member? num '(1 3 5 7 8 10 12)))
  
  (if(and(is-member-30? month)
       (day-min-max-set? 1 day 30 month))
     #t 
     (if(and(is-member-31? month)
            (day-min-max-set? 1 day 31 month))
        #t
        #f)))

(define (valid-date? month day year)
  (if(month-day-year-valid? month day year)
     (if(or(compare-month-day? month day)(leap-year? year))
        (if(leap-year? year)
           (if(leap-month? month year)
              #t
              #f)
           (if(and(and(not(leap-year? year))
                   (not(leap-month? month year)))
               (month-day-year-valid? month day year))
           #f
           #t))
        #f)
     #f))

(valid-date? 6 31 1999);f
(valid-date? 11 30 1999);t
(valid-date? 11 31 1999);f
(valid-date? 11 31 1999);f
(valid-date? 6 31 1999);f
(valid-date? 6 30 1999);t
(valid-date? 4 31 1999);f
(valid-date? 10 4 1949);t
(valid-date? 20 4 1776);f
(valid-date? 5 0 1992) ;f
(valid-date? 2 29 1900);f
(valid-date? 2 29 2000);t