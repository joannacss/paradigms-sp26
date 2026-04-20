;; Compute the expression:
;; ( 7 + 3 * 4 + 5 ) / 10
;; (+ 7 (* 3  4) 5) / 10
;; a / 10 --> / a 10
;; Store the result in a variable called "a"
(def a (/ (+ 7 (* 3  4) 5) 10))

;; print the value of "a" to the console
(println (float a))
(println (type a))