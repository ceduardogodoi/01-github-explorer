import { useState, useEffect } from "react";

import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  // Chamadas HTTP - Aula 03, 03:25

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {!repositories.length ? (
          <p>Carregando...</p>
        ) : (
          <>
            {repositories.map((repository) => (
              <RepositoryItem key={repository.id} repository={repository} />
            ))}
          </>
        )}
      </ul>
    </section>
  );
}
