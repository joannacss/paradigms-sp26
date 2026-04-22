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
(def x (greet "Prof. Santos"))
; print the returned value
(println x)


;; --------------------------------------------------------
;; EXAMPLE 2: MULTI-ARITY FUNCTION
;; --------------------------------------------------------
; Function named `messenger` that takes a `name` as parameter, 
; and prints "Hi, " + name 
; if invoked WITHOUT params, it invokes `messenger`
; with the param "stranger".
(defn messenger 
		([name] (println "Hi, " name))
		([] (messenger "stranger"))
)
; invokes `messenger` without parameters
(messenger)
; invokes the function with 1 parameter
(messenger "John Doe")
; This will not work: way too many args (messenger "John" "Doe")

;; --------------------------------------------------------
; ; EXAMPLE 3: VARIADIC FUNCTIONS
;; --------------------------------------------------------
; Function named `hello` that takes a `greeting` & `who` as parameters
; and then prints them
(defn hello [greeting & who] (println greeting who))
(hello "Joanna" "Cecilia")
(hello "Joanna" "Cecilia" "da" "Silva")
(hello "Joanna" "Cecilia" "da" "Silva" "Santos")


;; --------------------------------------------------------
; ; EXAMPLE 4: APPLYING FUNCTIONS
;; --------------------------------------------------------
; Function `distance(x,y)` --> computes Euclidean distance 
; to the origin [0, 0]
(defn distance [x y] (Math/sqrt (+ (* x x) (* y y))))
(def p1 [3 4]) ; define p1 as a vector [3 4]
(def p2 [1 2]) ; define p2 as a vector [1 2]
(distance p1) ; Runtime error: wrong number of args
(apply distance p1) ; this fixes the problem
; invoke distance with p1 and p2 (using get vs apply)



; expression below is equivalent of doing `distance(p1[0], p1[1])` in Python
; (println (distance (get p1 0) (get p1 1)))

