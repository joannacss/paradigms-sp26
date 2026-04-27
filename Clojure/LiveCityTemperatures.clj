(require '[clojure.string :as str])

; path to file
(def filepath "./data/city_temperatures.csv")

; read full file contents and assign to rows
(def rows (rest (str/split-lines (slurp filepath))))
(println rows)
; ; parse each row
(defn parse-row [row]
  (let [[city temp] (str/split row #",")]
    [city (Float/parseFloat temp)]))


; ; create a map like this {"city": [t1, t2,..,]}
(def city-temps
  (group-by first (map parse-row rows)))

; ; a function that computes averages
(defn avg [temps] (/ (reduce + temps) (count temps)))


; doseq is used for iteration with side effects (like printing), not for producing a value.
; Loop through a collection and destructure it
(doseq [[city entries] city-temps]
  (let [temps (map second entries)]
    (println city)
    (println "\tmin:" (apply min temps))
    (println "\tmax:" (apply max temps))
    (println "\tavg:" (avg temps))))