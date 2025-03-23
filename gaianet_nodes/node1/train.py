
from gaianet import GaiaNode

node = GaiaNode(config_path="gaianet_node_config.yaml")
node.train_model(local_data_path="data.csv")
node.sync_model()
print("Training completed and model synced!")
