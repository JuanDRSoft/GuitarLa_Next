import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
          />
          <div>
            <p>
              Consequat esse fugiat occaecat fugiat non. Nostrud cupidatat et
              enim laborum ipsum magna id dolor. In incididunt dolore tempor et.
              Nisi eu commodo magna aliqua reprehenderit tempor culpa velit esse
              deserunt sint officia proident esse. Occaecat in non est fugiat id
              culpa deserunt deserunt exercitation mollit id reprehenderit
              incididunt est. Sint eiusmod occaecat esse non non anim occaecat
              eu. Incididunt nulla duis duis exercitation commodo anim. Proident
              sit voluptate sint mollit laboris eu exercitation irure tempor
              occaecat. In qui cillum mollit incididunt cillum sint quis
              occaecat. Deserunt sunt fugiat ex qui consectetur proident irure
              cupidatat nostrud ex elit fugiat commodo. Consectetur labore
              aliqua laborum est cupidatat enim nisi cillum nostrud voluptate.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
