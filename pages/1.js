import ChapterLayout from '../components/ChapterLayout'
import Photo from '../components/Photo'

export default () => (
  <ChapterLayout
    pageTitle="Maria Martucci - Introduction"
    chapterTitle="1. Introduction"
    next="/2"
    nextTitle="My mother's conversion">

    <p>Maria Martucci was born in Mottola, a town in the province of Taranto, Italy, on September 16, 1909. Her parents were Donato Martucci and Rosa Antonia Latturulo. Hers was a large family: her mother was a seamstress who worked from home, and Maria, being the eldest daughter, was entrusted with the housework and to care for her younger brothers. She worked diligently and with joy.</p>
    <p>She was 19 years old when she became engaged to my father, Cosimo Stallo (born November 2, 1905 in Massafra to Giovanni Stallo and Maria Annunziata Mellone), who himself came from a poor family. My paternal grandmother was widowed when my father was only 17 years old; a train hit my grandfather as he traveled to work one day, and he died.</p>
    <p>From that moment onward, my father, who was the only male of five children (Antonia, Cosimo, Lucia, Leonarda, Pompea), dutifully took on the burden and responsibility as head of family.</p>
    <p>On November 10, 1929, when Maria was 20 years old, my parents married and settled in Mottola.</p>
    <p>They had three children in the early years of their marriage: a girl and two boys. I do not remember the name of the infectious disease they caught, but the first two children became ill and died within a short timespan of each other. Following this great sorrow, my parents decided to move with their youngest child, Giovanni, who was 2 at the time, to my father’s hometown of Massafra. It was 1936.</p>
    <Photo src="../static/maria-martucci-cosimo-stallo.jpg" caption="My parents: Maria Martucci and Cosimo Stallo (1980)" />
  </ChapterLayout>
)