;; -------------------SYNTAX-------------------------------
;;    name      params           body
;;    -----  ----------    ----------------
;: (defn name  [p1 p2 … pn]  (      ...       ))
;; --------------------------------------------------------

;; --------------------------------------------------------
;; EXAMPLE 1: SINGLE ARITY FUNCTION NAMED `greet`
;; --------------------------------------------------------
; function `greet` that returns a string “Hello, ” + name
(defn greet [name] (str "Hello, " name))

; invoke the function which returns a value (assign to x)
(def x (greet "Jane"))
; print the returned value
(println x)

;; --------------------------------------------------------
;; EXAMPLE 2: MULTI-ARITY FUNCTION
;; --------------------------------------------------------
; Function named `messenger` that takes a `name` as parameter, and prints "Hi, " + name 
; if invoked WITHOUT params, it invokes messenger with the param "stranger".

; invokes `messenger` without parameters

; invokes the function with 1 parameter


;; --------------------------------------------------------
; ; EXAMPLE 3: VARIADIC FUNCTIONS
;; --------------------------------------------------------
; Function named `hello` that takes a `greeting` & `who` as parameters
; and then prints them


;; --------------------------------------------------------
; ; EXAMPLE 4: APPLYING FUNCTIONS
;; --------------------------------------------------------
; Function `distance(x,y)` --> computes Euclidean distance to the origin [0, 0]

 ; define p1 as a vector [3 4]
 ; define p2 as a vector [1 2]
; invoke distance with p1 and p2 (using get vs apply)



; expression below is equivalent of doing `distance(p1[0], p1[1])` in Python
; (println (distance (get p1 0) (get p1 1)))

