# from Repository.Repository import IDatabase, repository
from Server.Repository.Repository import IDatabase, repository

class SaleRepository:
    def __init__(self, repository: IDatabase) -> None:
        self._repository = repository

    def get_all_items(self):
        return self._repository.get_all("SELECT * FROM sales")
    
    def get_by_id(self, id):
        return self._repository.get_by_id(id)

    def delete(self, id):
        return self._repository.delete(id)

    def create(self, sale):
        return self._repository.create(sale)    
    
    def update(self, id):
        return self._repository.update(id)
    
sale_repository = SaleRepository(repository=repository)