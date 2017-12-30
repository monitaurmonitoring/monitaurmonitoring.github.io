# Reactionetes Makefile
# Install location
$(eval BLENDVR_DIR := $(HOME)/.blendvr)
$(eval BLENDVR_BIN := $(BLENDVR_DIR)/bin)

blender: $(BLENDVR_BIN)
	@./blendstaller blender

$(BLENDVR_BIN)/blender: $(BLENDVR_BIN)
	cd $(BLENDVR_DIR) \
	  && curl --silent ftp://blendervrdownloads:blendervr@ftp.limsi.fr/compiled/blender-2.74-a8adeeb-linux-glibc211-x86_64.tar.bz2 | tar jxvf -
	cd $(BLENDVR_BIN) \
  	&&  ln -s ../blender*/blender* ./

$(BLENDVR_BIN):
	mkdir -p $(BLENDVR_BIN)

samples: $(BLENDVR_DIR)/samples

source: $(BLENDVR_DIR)/source $(BLENDVR_DIR)/source/libs/python-ovrsdk

$(BLENDVR_DIR)/samples:
	mkdir -p $(BLENDVR_DIR)/samples
	cd $(BLENDVR_DIR)/ \
		&& svn checkout https://github.com/BlenderVR/samples/trunk/basic/basic samples/

$(BLENDVR_DIR)/source:
	cd $(BLENDVR_DIR)/ \
		&& git clone --depth=1 https://github.com/BlenderVR/source.git source

$(BLENDVR_DIR)/source/libs/python-ovrsdk:
	cd $(BLENDVR_DIR)/source/libs \
		&& git clone --depth=1 https://github.com/BlenderVR/python-ovrsdk.git
