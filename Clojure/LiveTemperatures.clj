; Imports the clojure.string namespace as 'str' alias
(require '[clojure.string :as str]) ; from clojure.string as str

; hardcodes the file path to the CSV
(def filepath "./data/temperatures.csv")

; parse into rows using `slurp` and `str/split` by new lines (#"\n")
(def rows (str/split (slurp filepath) #"\n"))
 ; discard header using the `rest` function
(def rows (rest rows))
; use `(map callback collection)` to make it a collection of floating point numbers

(def rows (map Float/parseFloat rows))

(println rows)
; (defn avg[p] ())d

; print metrics
(println (apply min rows))
(println (apply max rows))

