import os
from toml import load
from pathlib import Path


def load_conf(folder_name="conf"):
    """ Loads all conf from all files inside a given folder.
    Args:
        folder_name (str): Path to the folder
    """
    abs_current_path = os.path.abspath(__file__)
    array = abs_current_path.split("/")
    array = array[:-2]
    array.append(folder_name)
    conf_path = "/".join(array)
    filenames = os.listdir(conf_path)
    conf = [
        conf_path + "/" + filename
        for filename in filenames if filename.endswith(".conf")
    ]
    return load(conf)


def get_abs_path(filepath):
    return "/".join((_get_root_abs_path(), filepath))


def _get_root_abs_path():
    return str(Path(os.path.abspath(__file__)).parents[1])
